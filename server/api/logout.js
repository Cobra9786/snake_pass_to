export default defineEventHandler((event) => {
    setCookie(event, 'authToken', '', {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      path: '/',
      maxAge: 0, // Expire the cookie
    });
  
    return { status: 200, message: 'Logged out' };
  });
  