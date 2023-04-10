import { auth } from "../models/firebase-config.js";
import { errorHandler } from "../services/service.js";
import { createUserWithEmailAndPassword, deleteUser, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"

export async function user_status(req, res) {
    await onAuthStateChanged(auth, (user) => {
        if (user) {
            return res.send(true)
        } 
        return res.send(false)
    })
}

export async function signup(req, res) {
    const { email, password } = req.body
    await onAuthStateChanged(auth, (user) => {
        if (user) {
            return res.send("Already Logged In")
        } 
    })
    try {
        const response = await createUserWithEmailAndPassword(auth, email, password)
        return res.send("Registration successful")
    } catch (e) {
        const feedback = errorHandler(e)
        return res.send(feedback)
    }
} 

export async function signin(req, res) {
    const { email, password } = req.body
    try {
        const response = await signInWithEmailAndPassword(auth, email, password)
        return res.send("Successfully signed in")
    } catch (e) {
        const feedback = errorHandler(e)
        console.error(feedback)
        return res.send(feedback)
    }
}

export async function logout(req, res) {
    try {
        const response = await signOut(auth)
        return res.send("Successfully logged out")
    } catch (e) {
        const feedback = errorHandler(e)
        console.error(feedback)
        return res.send(feedback)
    }
} 

export async function delete_account(req, res) {
    try {
        const response = await deleteUser(auth.currentUser)
        return res.send("Successfully removed account")
    } catch (e) {
        const feedback = errorHandler(e)
        console.error(feedback)
        return res.send(feedback)
    }
} 