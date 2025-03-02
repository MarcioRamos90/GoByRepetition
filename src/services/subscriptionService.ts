"use server"

interface SubscriptionData {
  email: string;
}

export async function subscribeUser(data: SubscriptionData) {
  try {
    const response = await fetch('http://localhost:8080/api/wishlist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return { success: true, data: result };

  } catch (error) {
    console.error('Subscription error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'An unknown error occurred'
    };
  }
}