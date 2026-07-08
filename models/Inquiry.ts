import mongoose, { Schema, Document } from 'mongoose';

export interface IInquiry extends Document {
  id: string; // Keeps client-side ID compatibility
  fullName: string;
  phoneNumber: string;
  emailAddress: string;
  preferredType: 'Hajj' | 'Umrah';
  preferredYear: string;
  preferredPackage: string;
  city: string;
  message: string;
  date: string;
  contacted: boolean;
}

const InquirySchema: Schema = new Schema({
  id: { type: String, required: true, unique: true },
  fullName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  emailAddress: { type: String, required: true },
  preferredType: { type: String, enum: ['Hajj', 'Umrah'], required: true },
  preferredYear: { type: String, required: true },
  preferredPackage: { type: String, default: 'কোনোটিই নয়' },
  city: { type: String, default: 'উল্লেখ নেই' },
  message: { type: String, default: 'কোনো বার্তা নেই' },
  date: { type: String, required: true },
  contacted: { type: Boolean, default: false }
}, {
  timestamps: true
});

export default mongoose.models.Inquiry || mongoose.model<IInquiry>('Inquiry', InquirySchema);
