In your original catch block:

ts
const text = await err?.response?.text?.();
You assumed err had a response property, like FetchError.response. But err was typed as unknown, and TypeScript enforces that you can't access properties on unknown without a type check.

And more subtly: if you don’t catch that error properly and try to log it, the logging itself can throw another error, creating a double-failure in the catch block — and returning a vague 500 to the browser.

# NEXT

Your updated block:

Type-narrowed err using instanceof Error.

Carefully attempted to access .response.text() only if it existed.

Wrapped the response.text() in a try/catch, so even that couldn’t crash the handler.

This defensive style:

Prevented a crash inside the catch.

Let you see what the real problem was via proper logging.

Kept the server from spiraling into a useless 500 error without a message.


catch (err: unknown) {
  if (err instanceof Error) {
    // clean logging
  } else {
    console.error('Unknown error', err);
  }
}