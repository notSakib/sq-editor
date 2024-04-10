export interface CandidateTaggingPayload {
  bucket_name: string;
  s3_filename: string;
}

interface UpdatedTagging {
  candidate_cloud_category?: string;
  candidate_cloud_sub?: string;
}

export interface UpdateCandidateTaggingPayload {
  bucket_name: string;
  updated_tagging: UpdatedTagging;
  s3_filename: string;
}
export interface generateChatResponsePayload {
  text: string;
}
