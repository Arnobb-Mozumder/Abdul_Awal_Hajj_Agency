import mongoose, { Schema, Document } from 'mongoose';

export interface IUpload extends Document {
  filename: string;
  contentType: string;
  data: string; // Base64 encoded file content
}

const UploadSchema: Schema = new Schema({
  filename: { type: String, required: true, unique: true, index: true },
  contentType: { type: String, required: true },
  data: { type: String, required: true }
}, {
  timestamps: true
});

export default mongoose.models.Upload || mongoose.model<IUpload>('Upload', UploadSchema);
