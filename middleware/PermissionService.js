import userModel from '../user/user.model';
import error from 'http-errors';
const GlobalService = new globalService();

class Service {
    constructor() {}
    async isAdmin(req, res, next) {
        try {
            //get access token from headers
            // const authHeader = req.headers['authorization'];
            const id = getUser(req.headers.authorization);
            const user = await userModel.findOne({ _id: id });
            //send error if user not found
            if (!user) throw error.Unauthorized('invalid email/pass');

            //if user found but is not and admin then deny acccess
            if (user.isAdmin === false) {
                throw error.Forbidden('Forbidden Access');
            } else if (user.isAdmin === true) {
                //if user found and is an admin then give access to the next middleware
                next();
            }
        } catch (e) {
            next(e);
        }
    }
    // async isCategoryPermitted(req, res, next) {
    //     try {
    //         const authHeader = req.headers['authorization'];
    //         const id = GlobalService.getUser(authHeader);
    //         //check if user exists
    //         const user = await User.findOne({ _id: id });
    //         if (!user) return res.status(404);
    //         const catID = req.params.categoryId;

    //         // categories that have the sam
    //         const category = await Category.findOne({
    //             creatorID: id,
    //             _id: catID
    //         });
    //         //send error when category return null
    //         if (!category)
    //             return res.status(404).json({
    //                 success: false,
    //                 error: 'Not Found',
    //                 message: 'No such category found..'
    //             });

    //         //param id diff than the category id
    //         if (category._id != catID) {
    //             return res.status(401).json({
    //                 success: false,
    //                 error: 'Unauthorized',
    //                 message: 'No'
    //             });
    //         }
    //         //loggedin user id diff than the one of the creator
    //         if (category.creatorID != id) {
    //             return res.status(401).json({
    //                 success: false,
    //                 error: 'Unauthorized',
    //                 message: 'No'
    //             });
    //         }
    //         next();
    //     } catch (e) {
    //         next(e);
    //     }
    // }
    // async isNotePermitted(req, res, next) {
    //     try {
    //         const authHeader = req.headers['authorization'];
    //         const id = GlobalService.getUser(authHeader);
    //         //check if user exists
    //         const user = await User.findOne({ _id: id });
    //         if (!user) return res.status(405).json({ success: false, message: 'yo' });
    //         const noteID = req.params.noteId;

    //         // categories that have the sam
    //         const note = await Notes.findOne({
    //             creatorID: id,
    //             _id: noteID
    //         });
    //         //send error when note return null
    //         if (!note)
    //             return res.status(404).json({
    //                 success: false,
    //                 error: 'Not Found',
    //                 message: 'No such Note exists..'
    //             });

    //         //param id diff than the note id
    //         if (note._id != noteID) {
    //             return res.status(403).json({
    //                 success: false,
    //                 error: 'Forbbiden',
    //                 message: 'Unauthorized Access.'
    //             });
    //         }
    //         //loggedin user id diff than the one of the creator
    //         if (note.creatorID != id) {
    //             return res.status(403).json({
    //                 success: false,
    //                 error: 'Forbbiden',
    //                 message: 'Unauthorized Access.'
    //             });
    //         }
    //         next();
    //     } catch (e) {
    //         next(e);
    //     }
    // }
    async isEmailVerified(req, res, next) {
        try {
            //get access token from headers
            // const authHeader = req.headers['authorization'];
            const id = GlobalService.getUser(req.headers.authorization);

            const user = await userModel.findOne({ _id: id });

            if (!user) throw error.NotFound('user not found..');
            //give access if token is valid

            if (user.isVerified === false) {
                throw error.Unauthorized('Please verify your email');
            } else if (user.isVerified === true) {
                next();
            }
        } catch (e) {
            next(e);
        }
    }
    async checkAssignedRoom(req, res, next) {}
}
export default Service;
