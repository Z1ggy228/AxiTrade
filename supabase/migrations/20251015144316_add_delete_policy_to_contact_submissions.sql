/*
  # Add DELETE Policy for Contact Submissions

  1. Security Changes
    - Add DELETE policy for authenticated users on `contact_submissions` table
    
  2. Description
    - Allows authenticated admin users to delete contact form submissions
    - This fixes the issue where delete operations were blocked by RLS
*/

-- Only authenticated users can delete submissions (admin access)
CREATE POLICY "Authenticated users can delete submissions"
  ON contact_submissions
  FOR DELETE
  TO authenticated
  USING (true);