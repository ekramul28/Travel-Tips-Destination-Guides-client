import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface IPost {
  _id: string;
  title: string;
  description: string;
  images: string[];
  location: string;
  city: string;
  dateFound: string;
  status: string;
  premium: string;
  isReported: boolean;
  reportCount: number;
  category: ICategory;
  authorId: IUser;
  vote: IVote[];
  comment: [];
  createdAt: string;
  updatedAt: string;

  __v: number;
}

export interface ICategory {
  _id: string;
  name: string;
  postCount: number;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface IUser {
  _id: string | undefined;
  name: string;
  role: string;
  email: string;
  status: string;
  verified: boolean;
  website: string;
  bio: string;
  following: [];
  followers: [];
  mobileNumber: string;
  profilePhoto: string;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
}

export interface IInput {
  variant?: "flat" | "bordered" | "faded" | "underlined";
  size?: "sm" | "md" | "lg";
  required?: boolean;
  type?: string;
  label: string;
  name: string;
  disabled?: boolean;
}

export type User = {
  _id: string;
  name: string;
  email: string;
  mobileNumber: string;
  profilePhoto: string;
  role: "USER" | "ADMIN" | "MODERATOR"; // Adjust roles as necessary
  status: "ACTIVE" | "INACTIVE";
  verified: boolean;
};

export interface ISearchResult {
  title: string;
  description: string;
  thumbnail: string;
  id: string;
}
export interface IClaimRequest {
  item: string;
  description: string;
  answers: string[];
}

export interface IAnswer {
  question: string;
  answer: string;
  createdAt: string;
  updatedAt: string;
}

export type TClaimRequest = {
  _id: string;
  item?: IPost;
  claimant: string | IClaimant;
  status: string;
  description: string;
  answers: IAnswer[];
  feedback: string | null;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export interface IClaimant {
  _id: string;
  name: string;
  role: "USER" | "ADMIN";
  email: string;
  status: "ACTIVE" | "INACTIVE";
  mobileNumber: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  profilePhoto: string;
}

export interface IReceivedClaimRequest extends IPost {
  claimRequests: TClaimRequest[];
}

export interface IFeedbackStatus {
  feedback: string;
  status: string;
}

export interface ISearchResult {
  title: string;
  description: string;
  thumbnail: string;
  id: string;
}

export type IComment = {
  postId: IPost;
  userId: IUser;
  content: string;
  parentId?: IUser;
  createdAt: Date;
  updatedAt: Date;
};

export type IVote = {
  userId: string;
  postId: string;
  voteType: "upvote" | "downvote";
  createdAt?: Date;
  updatedAt?: Date;
};
