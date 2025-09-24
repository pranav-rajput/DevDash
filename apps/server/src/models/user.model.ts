import { Schema, model, Document } from 'mongoose';

export interface IUser extends Document {
  githubId: string;
  username: string;
  avatarUrl: string;
}

const UserSchema = new Schema<IUser>({
  githubId: { type: String, required: true, unique: true },
  username: { type: String, required: true },
  avatarUrl: { type: String },
}, { timestamps: true });

export const User = model<IUser>('User', UserSchema);