import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    // Automatically detect the domain this is being served from
    const appUrl = new URL(request.url).origin;

    const config = {
        accountAssociation: {
            header: "eyJmaWQiOjg4NzMsInR5cGUiOiJjdXN0b2RpYWwiLCJrZXkiOiJweXJzayJ9",
            payload: "eyJkb21haW4iOiJmb290YmFsbC1wcmVkaWN0aW9uLW5xaXk3bzF6cS1ub2JvZHlzLXByb2plY3RzLWEzYWM3Y2JmLnZlcmNlbC5hcHAifQ",
            signature: "MHhkYj..."
        },
        frame: {
            version: "1",
            name: "Laliga Predictor",
            description: "AI-powered football match predictor for La Liga and EPL.",
            iconUrl: `${appUrl}/globe.svg`,
            homeUrl: appUrl,
            imageUrl: `${appUrl}/globe.svg`,
            buttonTitle: "Predict Matches",
            splashImageUrl: `${appUrl}/globe.svg`,
            splashBackgroundColor: "#ffffff",
            webhookUrl: `${appUrl}/api/webhook`
        }
    };

    return NextResponse.json(config);
}
