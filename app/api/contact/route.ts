import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message, to } = await request.json()

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json('All fields are required', { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json('Invalid email format', { status: 400 })
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: [to || 'wirl.jordan@gmail.com'],
      subject: `Contact Form: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: #FECB23; padding: 20px; text-align: center; border-radius: 10px; margin-bottom: 20px;">
            <h1 style="color: #000; margin: 0; font-size: 24px; font-weight: bold;">CLIPTO FLIP</h1>
            <p style="color: #000; margin: 5px 0 0 0; font-size: 16px;">Contact Form Submission</p>
          </div>
          
          <div style="background-color: white; padding: 20px; border-radius: 10px; border: 2px solid #000;">
            <h2 style="color: #000; margin-top: 0;">New Contact Message</h2>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #000;">From:</strong> ${name} (${email})
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #000;">Subject:</strong> ${subject}
            </div>
            
            <div style="margin-bottom: 20px;">
              <strong style="color: #000;">Message:</strong>
              <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin-top: 5px; white-space: pre-wrap; font-family: Arial, sans-serif;">
                ${message}
              </div>
            </div>
            
            <div style="border-top: 1px solid #ddd; padding-top: 15px; font-size: 12px; color: #666;">
              <p>This message was sent from the Clipto Flip contact form.</p>
              <p>Timestamp: ${new Date().toLocaleString()}</p>
            </div>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        'Failed to send email. Please try again later.', 
        { status: 500 }
      )
    }

    // Log successful email
    console.log('Email sent successfully:', data)

    // Return success response
    return NextResponse.json({ 
      success: true, 
      message: 'Message sent successfully' 
    })

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      'Internal server error. Please try again later.', 
      { status: 500 }
    )
  }
} 