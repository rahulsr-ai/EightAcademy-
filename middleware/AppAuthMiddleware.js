
import jwt from 'jsonwebtoken'


export const ProtectRoute = async (req, res, next) => {

    try {
        const decode = jwt.verify(req.headers.authorization, "secertKey");
        next()

    } catch (error) {
        
        console.log('error in the middleware');
        console.log(error);

    }

}