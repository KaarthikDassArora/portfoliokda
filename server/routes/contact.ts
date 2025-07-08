import { RequestHandler } from "express";
import nodemailer from "nodemailer";
import { ContactFormRequest, ContactFormResponse } from "@shared/api";

export const handleContact: RequestHandler = async (req, res) => {
  try {
    const { name, email, message } = req.body as ContactFormRequest;

    // Validate required fields
    if (!name || !email || !message) {
      const response: ContactFormResponse = {
        success: false,
        message: "All fields are required",
      };
      return res.status(400).json(response);
    }

    // Configure nodemailer (using Gmail as example - update with your email service)
    const transporter = nodemailer.createTransporter({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER || "your-email@gmail.com",
        pass: process.env.EMAIL_PASS || "your-app-password",
      },
    });

    // Email content
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER || "kaarthik@example.com",
      subject: `Portfolio Contact: Message from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    const response: ContactFormResponse = {
      success: true,
      message: "Message sent successfully!",
    };

    res.json(response);
  } catch (error) {
    console.error("Error sending email:", error);

    const response: ContactFormResponse = {
      success: false,
      message: "Failed to send message. Please try again later.",
    };

    res.status(500).json(response);
  }
};
