import { Button } from "@nextui-org/button";
import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalContent,
} from "@nextui-org/modal";
import { useState, ChangeEvent, useEffect } from "react";
import { FaUpload } from "react-icons/fa";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

import FXInput from "../../form/FXInput";
import FXTextarea from "../../form/FXTextArea";

import { useUpdateProfile } from "@/src/hooks/updateProfile.hook";
import { IUser } from "@/src/types";

interface EditProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: IUser;
  onUpdate: (updatedUser: IUser) => void;
}

const EditProfileModal: React.FC<EditProfileModalProps> = ({
  isOpen,
  onClose,
  user,
  onUpdate,
}) => {
  const [profilePicture, setProfilePicture] = useState<File[] | []>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { mutate: updateMyProfileHandel, error } = useUpdateProfile();
  // Initialize useForm with default values
  const methods = useForm({
    defaultValues: {
      name: user?.name || "",
      bio: user?.bio || "",
      website: user?.website || "",
      mobileNumber: user?.mobileNumber || "",
    },
  });

  const { handleSubmit, setValue } = methods;

  // Set values on user change
  useEffect(() => {
    if (user) {
      setValue("name", user.name);
      setValue("bio", user.bio);
      setValue("website", user.website);
      setValue("mobileNumber", user.mobileNumber);
    }
  }, [user, setValue]);

  const handlePictureChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = e.target.files[0];

      setProfilePicture([files]);
    }
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsSubmitting(true);

    // Prepare form data
    const formData = new FormData();
    const updatedData = {
      ...data,
    };

    formData.append("data", JSON.stringify(updatedData));

    // Append profile picture if available

    for (let image of profilePicture) {
      formData.append("profilePhoto", image);
    }

    try {
      // Update profile using API call
      updateMyProfileHandel(formData);
    } catch (error) {
      console.error("Error updating profile:", error);
      setIsSubmitting(false);
    }
  };

  const handaleClose = () => {
    setTimeout(() => {
      setIsSubmitting(false);
      onClose(); // Make sure this correctly triggers closing the modal
    }, 4000);
  };

  return (
    <Modal
      aria-labelledby="edit-profile-modal-title"
      isDismissable={false}
      isKeyboardDismissDisabled={true}
      isOpen={isOpen}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">
          <h3 id="edit-profile-modal-title">Edit Profile</h3>
        </ModalHeader>
        <ModalBody>
          <FormProvider {...methods}>
            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
              <FXInput label="Name" name="name" />
              <FXInput label="Website" name="website" />
              <FXInput label="MobileNumber" name="mobileNumber" />
              <FXTextarea label="Bio" name="bio" />

              <div>
                <label
                  className="block text-sm font-medium text-gray-700 mb-1"
                  htmlFor="profile-picture-upload"
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
                    className="cursor-pointer flex items-center text-blue-500"
                    htmlFor="profile-picture-upload"
                  >
                    <FaUpload className="mr-2" /> Choose File
                  </label>
                  {profilePicture.length > 0 && (
                    <span className="ml-2 text-sm">
                      {profilePicture[0].name}
                    </span>
                  )}
                </div>
              </div>
              <ModalFooter>
                <Button
                  color="danger"
                  disabled={isSubmitting}
                  variant="light"
                  onPress={onClose}
                >
                  Close
                </Button>
                <Button
                  color="primary"
                  disabled={isSubmitting}
                  type="submit"
                  onClick={handaleClose}
                >
                  {isSubmitting ? "Saving..." : "Save Changes"}
                </Button>
              </ModalFooter>
            </form>
          </FormProvider>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default EditProfileModal;
