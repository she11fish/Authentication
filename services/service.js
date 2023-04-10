export function errorHandler(err) {
    switch (err.code) {
        case 'auth/email-already-in-use':
            return "Email Already In Use"
        case 'auth/invalid-email':
            return "Invalid Email"
        case 'auth/operation-not-allowed':
            return "Error during sign in"
        case 'auth/weak-password':
            return "Weak Password"
        case 'auth/wrong-password':
            return 'Incorrect Username or Password'
        case 'auth/too-many-requests':
            return 'Too many failed login attempts'
        case 'auth/user-not-found':
            return "Email Entered Does not Exist"
        default:
            return err.code
      }
}
