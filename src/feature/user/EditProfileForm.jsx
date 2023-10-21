import React from 'react'
import { useAuth } from '../../hooks/use-auth';
import Avatar from '../../components/Avatar';
import PictureForm from './pictureForm';
import { useState } from 'react';
import Loading from '../../components/Loading';


export default function EditProfileForm({ onSuccess }) {
  const [loading, setLoading] = useState(false);
  const { authUser, updateProfile } = useAuth();

  const uploadProfileImage = async input => {
    try {
      const formData = new FormData();
      formData.append('profileImage', input);
      setLoading(true);
      await updateProfile(formData);
      onSuccess();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (

    <div className="flex flex-col gap-4">
      {loading && <Loading />}
      <PictureForm
        title="Profile picture"
        initialSrc={authUser.profileImage}
        onSave={uploadProfileImage}
      >
        {(src, onClick) => (
          <div onClick={onClick}>
            <Avatar className="h-40" src={src} />
          </div>
        )}
      </PictureForm>
    </div>
  )
}
