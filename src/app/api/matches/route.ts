import { NextResponse } from 'next/server';
import { matchStore } from '../../../lib/store';

// This runs on the SERVER.
// It acts as a gateway to our cached data.
export async function GET() {
  try {
    // 1. Ask the store for data
    const data = await matchStore.getData();

    // 2. Return it
    return NextResponse.json(data);

  } catch (error) {
    console.error('API Route Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
