import { ID, Account, Client } from 'appwrite';
import Config from 'react-native-config';
import Snackbar from 'react-native-snackbar';

// Initialize Appwrite client
const appwriteClient = new Client();

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('66d6f4d400087884f454'); // Your project ID

// Ensure environment variables are correctly set
const APPWRITE_ENDPOINT: string = Config.APPWRITE_ENDPOINT!;
const APPWRITE_PROJECT_ID: string = Config.APPWRITE_PROJECT_ID!;

type CreateUserAccount = {
    email: string;
    password: string;
    name: string;
};

type LoginUserAccount = {
    email: string;
    password: string;
};

class AppwriteService {
    account;

    constructor() {
        // Configure Appwrite client
        appwriteClient.setEndpoint(APPWRITE_ENDPOINT).setProject(APPWRITE_PROJECT_ID);
        this.account = new Account(appwriteClient);
    }

    // Create a new user account
    async createAccount({ email, password, name }: CreateUserAccount) {
        try {
            // Use ID.unique() to ensure valid user ID format

            const randomString = Math.random().toString(36).substring(2, 15);
            const userId = `${name.replace(/[^a-zA-Z0-9.-_]/g, "").toLowerCase()}_${randomString}`

            const userAccount = await this.account.create(userId, email, password, name);

            if (userAccount) {
                console.log("User created successfully:", userAccount);
                return this.login({ email, password }); // Login immediately after account creation
            } else {
                throw new Error("Failed to create user account");
            }
        } catch (error) {
            Snackbar.show({
                text: String(error),
                duration: Snackbar.LENGTH_LONG,
            });
            console.error("AppWrite Service :: CreateAccount() ::", error);
        }
    }

    // Log in the user
    async login({ email, password }: LoginUserAccount) {
        try {
            console.log("Attempting login with email:", email);
            const session = await this.account.createEmailPasswordSession(email, password);
            console.log("Login successful, session:", session);
            return session;
        } catch (error) {
            Snackbar.show({
                text: String(error),
                duration: Snackbar.LENGTH_LONG,
            });
            console.error("AppWrite Service :: LoginAccount() ::", error);
            throw error;
        }
    }

    // Get current user details
    async getCurrentUser() {
        try {
            const user = await this.account.get();
            console.log("Current user:", user);
            return user;
        } catch (error) {
            console.error("Appwrite Service :: getUserAccount() ::", error);
            return null;
        }
    }

    // Logout the user
    async logout() {
        try {
            await this.account.deleteSession('current');
            console.log("User logged out successfully.");
        } catch (error) {
            console.error("Appwrite Service :: logout() ::", error);
        }
    }
}

export default AppwriteService;
