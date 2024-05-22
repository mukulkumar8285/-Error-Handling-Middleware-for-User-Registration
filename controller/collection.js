const vaildateUserData = (req , res , next)=>{
        const { firstName, lastName, password, email, phone } = req.body;
    
        // Validate first name and last name
        const namePattern = /^[A-Z][a-z]*$/;
        if (!namePattern.test(firstName)) {
            return next({
                status: 400,
                message: 'First name must start with a capital letter.'
            });
        }
        if (!namePattern.test(lastName)) {
            return next({
                status: 400,
                message: 'Last name must start with a capital letter.'
            });
        }
    
        // Validate password
        const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
        if (!passwordPattern.test(password)) {
            return next({
                status: 400,
                message: 'Password must be at least 8 characters long, contain at least one uppercase letter, one number, and one special character.'
            });
        }
    
        // Validate email
        if (!email.includes('@')) {
            return next({
                status: 400,
                message: 'Email must contain @ symbol.'
            });
        }
    
        // Validate phone number
        if (phone.length < 10) {
            return next({
                status: 400,
                message: 'Phone number must be at least 10 digits long.'
            });
        }
    
        next();
    };
    
;
    
module.exports = vaildateUserData;