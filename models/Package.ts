import mongoose, { Schema, Document } from 'mongoose';

export interface IPriceBreakdown {
  label: string;
  value: string;
}

export interface IPackage extends Document {
  id: string; // Keep compatibility with frontend ID
  type: 'Hajj' | 'Umrah';
  name: string;
  price: string;
  summary?: string;
  priceBreakdown?: IPriceBreakdown[];
  duration: string;
  qurbani: string;
  makkahHotel: string;
  madinahHotel: string;
  transport: string;
  meals: string;
  pdfUrl?: string;
  benefits?: string[];
  notes?: string;
}

const PriceBreakdownSchema = new Schema({
  label: { type: String, required: true },
  value: { type: String, required: true }
}, { _id: false });

const PackageSchema: Schema = new Schema({
  id: { type: String, required: true, unique: true },
  type: { type: String, enum: ['Hajj', 'Umrah'], required: true },
  name: { type: String, required: true },
  price: { type: String, required: true },
  summary: { type: String },
  priceBreakdown: [PriceBreakdownSchema],
  duration: { type: String, required: true },
  qurbani: { type: String, required: true },
  makkahHotel: { type: String, required: true },
  madinahHotel: { type: String, required: true },
  transport: { type: String, required: true },
  meals: { type: String, required: true },
  pdfUrl: { type: String, default: '' },
  benefits: [{ type: String }],
  notes: { type: String }
}, {
  timestamps: true
});

export default mongoose.models.Package || mongoose.model<IPackage>('Package', PackageSchema);
