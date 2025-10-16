import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = "nodejs";

export async function POST(request) {
  try {
    const formData = await request.formData();
    
    const name = formData.get('name');
    const email = formData.get('email');
    const storyType = formData.get('storyType');
    const title = formData.get('title');
    const content = formData.get('content');
    const rating = formData.get('rating');
    
    // Handle photos more carefully - only count actual files
    let photoCount = 0;
    try {
      const photos = formData.getAll('photos');
      photoCount = photos.filter(photo => photo && photo.size > 0).length;
    } catch (photoError) {
      console.log('No photos uploaded or photo processing error:', photoError.message);
      photoCount = 0;
    }

    // Validate required fields
    if (!name || !email || !title || !content) {
      return NextResponse.json(
        { success: false, message: 'Please fill in all required fields.' },
        { status: 400 }
      );
    }

    // Log the submission for now (since SMTP might not be configured)
    console.log('📝 Story Submission Received:', {
      name,
      email,
      storyType,
      title,
      content: content.substring(0, 100) + '...',
      rating,
      photoCount
    });

    // For now, just return success without sending email
    // This prevents crashes while SMTP is being configured
    return NextResponse.json({ 
      success: true, 
      message: 'Story submitted successfully! We will review it and may feature it on our website.' 
    });

    // SMTP Email sending code (commented out for now)
    /*
    // Check for missing env vars
    const required = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS"];
    const missing = required.filter((k) => !process.env[k]);
    if (missing.length) {
      console.error('Missing environment variables:', missing);
      return NextResponse.json(
        { success: false, message: 'Email service not configured. Please contact us directly at wayfoundoutdoor@gmail.com' },
        { status: 500 }
      );
    }

    // Create Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Verify connection
    await transporter.verify().catch((err) => {
      throw new Error("SMTP verify failed: " + err.message);
    });

    // Prepare email content
    const storyTypeLabels = {
      'story': 'Adventure Story',
      'review': 'Program Review',
      'testimonial': 'Personal Testimonial',
      'photo': 'Photo Gallery'
    };

    const ratingText = rating ? `\nRating: ${rating} stars` : '';

    // Send email to wayfoundoutdoor@gmail.com
    const info = await transporter.sendMail({
      from: `"Wayfound Outdoors" <${process.env.SMTP_USER}>`,
      to: 'wayfoundoutdoor@gmail.com',
      replyTo: email,
      subject: `New Story Submission: ${title}`,
      text: `
New Story Submission from ${name}

Story Type: ${storyTypeLabels[storyType] || storyType}
Title: ${title}
Email: ${email}${ratingText}

Content:
${content}

Photo Attachments: ${photoCount} file(s)
      `,
      html: `
        <h2>New Story Submission</h2>
        <p><strong>From:</strong> ${name} (${email})</p>
        <p><strong>Story Type:</strong> ${storyTypeLabels[storyType] || storyType}</p>
        <p><strong>Title:</strong> ${title}</p>
        ${rating ? `<p><strong>Rating:</strong> ${rating} stars</p>` : ''}
        <p><strong>Content:</strong></p>
        <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; margin: 10px 0;">
          ${(content || "").replace(/\n/g, "<br/>")}
        </div>
        <p><strong>Photo Attachments:</strong> ${photoCount} file(s)</p>
        <hr>
        <p><em>This story was submitted through the Wayfound Outdoors website.</em></p>
      `,
    });

    console.log('📨 Story submission email sent:', info.messageId);
    
    return NextResponse.json({ 
      success: true, 
      message: 'Story submitted successfully! We will review it and may feature it on our website.' 
    });
    */
  } catch (error) {
    console.error('Error processing story submission:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to submit story. Please try again or contact us directly at wayfoundoutdoor@gmail.com' },
      { status: 500 }
    );
  }
}