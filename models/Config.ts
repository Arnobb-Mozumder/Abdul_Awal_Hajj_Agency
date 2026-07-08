import mongoose, { Schema, Document } from 'mongoose';

export interface IConfig extends Document {
  agencyName: string;
  licenseText: string;
  licenseNumber: string;
  phone1: string;
  phone2: string;
  email: string;
  agentName: string;
  agentTitle: string;
  agentPhoto: string;
  agencyLogo: string;
  announcement: string;
  aboutText: string;
  location1Name: string;
  location1Address: string;
  location1Map: string;
  location2Name: string;
  location2Address: string;
  location2Map: string;
  heroSlogan: string;
  heroContactBtn: string;
  heroPackagesBtn: string;
  aboutTitle: string;
  aboutExperience1: string;
  aboutExperience2: string;
  aboutBtn: string;
  packagesBadge: string;
  packagesTitle: string;
  packagesDesc: string;
  specialNoteTitle: string;
  specialNoteText: string;
  hajjIntroTitle: string;
  hajjIntroSalutation: string;
  hajjIntroText: string;
  formSideTitle: string;
  formSideText: string;
  formTitle: string;
  pledgeBadge: string;
  pledgeTitle: string;
  pledgeCard1Title: string;
  pledgeCard1Text: string;
  pledgeCard2Title: string;
  pledgeCard2Text: string;
  pledgeCharityList: string;
  addressBadge: string;
  addressTitle: string;
  addressDesc: string;
  facebookUrl: string;
  facebookName: string;
}

const ConfigSchema: Schema = new Schema({
  agencyName: { type: String, required: true },
  licenseText: { type: String },
  licenseNumber: { type: String },
  phone1: { type: String, required: true },
  phone2: { type: String },
  email: { type: String, required: true },
  agentName: { type: String },
  agentTitle: { type: String },
  agentPhoto: { type: String },
  agencyLogo: { type: String },
  announcement: { type: String },
  aboutText: { type: String },
  location1Name: { type: String },
  location1Address: { type: String },
  location1Map: { type: String },
  location2Name: { type: String },
  location2Address: { type: String },
  location2Map: { type: String },
  heroSlogan: { type: String },
  heroContactBtn: { type: String },
  heroPackagesBtn: { type: String },
  aboutTitle: { type: String },
  aboutExperience1: { type: String },
  aboutExperience2: { type: String },
  aboutBtn: { type: String },
  packagesBadge: { type: String },
  packagesTitle: { type: String },
  packagesDesc: { type: String },
  specialNoteTitle: { type: String },
  specialNoteText: { type: String },
  hajjIntroTitle: { type: String },
  hajjIntroSalutation: { type: String },
  hajjIntroText: { type: String },
  formSideTitle: { type: String },
  formSideText: { type: String },
  formTitle: { type: String },
  pledgeBadge: { type: String },
  pledgeTitle: { type: String },
  pledgeCard1Title: { type: String },
  pledgeCard1Text: { type: String },
  pledgeCard2Title: { type: String },
  pledgeCard2Text: { type: String },
  pledgeCharityList: { type: String },
  addressBadge: { type: String },
  addressTitle: { type: String },
  addressDesc: { type: String },
  facebookUrl: { type: String },
  facebookName: { type: String }
}, {
  timestamps: true
});

export default mongoose.models.Config || mongoose.model<IConfig>('Config', ConfigSchema);
