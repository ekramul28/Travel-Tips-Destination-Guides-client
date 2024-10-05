// components/EditProfileModal.tsx
import { Button } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/input";
import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalContent,
} from "@nextui-org/modal";
import { useState, ChangeEvent, FormEvent } from "react";
import { FaUpload } from "react-icons/fa";

import { IUser } from "@/src/types";

interface EditProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: IUser; // Ensure IUser has fields: id, name, bio, profilePicture, etc.
  onUpdate: (updatedUser: IUser) => void;
}

const EditProfileModal: React.FC<EditProfileModalProps> = ({
  isOpen,
  onClose,
  user,
  onUpdate,
}) => {
  const [name, setName] = useState(user?.name || "");
  const [bio, setBio] = useState(user?.bio || "");
  const [profilePicture, setProfilePicture] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handlePictureChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setProfilePicture(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Prepare form data
    const formData = new FormData();
    formData.append("name", name);
    formData.append("bio", bio);
    if (profilePicture) {
      formData.append("profilePicture", profilePicture);
    }

    try {
      // TODO: Replace the following with your actual API call
      // Example:
      // const response = await fetch('/api/updateProfile', {
      //   method: 'POST',
      //   body: formData,
      // });
      // const updatedUser = await response.json();

      // Simulating the profile update process
      setTimeout(() => {
        const updatedUser: IUser = {
          ...user,
          name,
          bio,
          profilePicture: profilePicture
            ? URL.createObjectURL(profilePicture) // Replace with actual URL from server
            : user.profilePicture,
        };

        onUpdate(updatedUser);
        onClose();
        setIsSubmitting(false);
      }, 1000); // Simulate an API delay
    } catch (error) {
      console.error("Error updating profile:", error);
      // Optionally, handle errors and provide feedback to the user
      setIsSubmitting(false);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
      isDismissable={false}
      isKeyboardDismissDisabled={true}
      aria-labelledby="edit-profile-modal-title"
    >
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">
          <h3 id="edit-profile-modal-title">Edit Profile</h3>
        </ModalHeader>
        <ModalBody>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              required
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              aria-label="Name"
            />
            <Textarea
              label="Bio"
              rows={3}
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              aria-label="Bio"
            />
            <div>
              <label
                htmlFor="profile-picture-upload"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Profile Picture
              </label>
              <div className="flex items-center">
                <input
                  accept="image/*"
                  className="hidden"
                  id="profile-picture-upload"
                  type="file"
                  onChange={handlePictureChange}
                />
                <label
                  htmlFor="profile-picture-upload"
                  className="cursor-pointer flex items-center text-blue-500"
                >
                  <FaUpload className="mr-2" /> Choose File
                </label>
                {profilePicture && (
                  <span className="ml-2 text-sm">{profilePicture.name}</span>
                )}
              </div>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button
            color="danger"
            variant="light"
            onPress={onClose}
            disabled={isSubmitting}
          >
            Close
          </Button>
          <Button
            color="primary"
            disabled={isSubmitting}
            type="submit"
            onPress={handleSubmit}
          >
            {isSubmitting ? "Saving..." : "Save Changes"}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EditProfileModal;
