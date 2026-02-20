import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, phone, branch, goldWeight, message } = body;

        // Validation
        if (!name || !phone) {
            return NextResponse.json(
                { error: "Name and phone are required." },
                { status: 400 }
            );
        }

        // Phone validation (Indian format)
        const phoneRegex = /^[6-9]\d{9}$/;
        if (!phoneRegex.test(phone.replace(/\s/g, ""))) {
            return NextResponse.json(
                { error: "Please enter a valid Indian phone number." },
                { status: 400 }
            );
        }

        // Log the lead (in production, save to database / send email)
        console.log("New lead received:", {
            name,
            phone,
            branch,
            goldWeight,
            message,
            timestamp: new Date().toISOString(),
        });

        // TODO: Add email notification integration
        // TODO: Add WhatsApp webhook integration

        return NextResponse.json({
            success: true,
            message: "Thank you! We will contact you shortly.",
        });
    } catch (error) {
        console.error("Contact form error:", error);
        return NextResponse.json(
            { error: "Something went wrong. Please try again." },
            { status: 500 }
        );
    }
}
