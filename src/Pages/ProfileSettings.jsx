import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { updateProfile } from 'firebase/auth';
import toast, { Toaster } from 'react-hot-toast';

const ProfileSettings = () => {
    const { user, refreshUser } = useContext(AuthContext); // assume refreshUser exists
    const [name, setName] = useState(user?.displayName || '');
    const [photoURL, setPhotoURL] = useState(user?.photoURL || '');

    const handleUpdate = async () => {
        if (!user) return;

        try {
            await updateProfile(user, {
                displayName: name,
                photoURL: photoURL
            });

            toast.success('Profile updated successfully!');
            refreshUser(); // refresh context after update
        } catch (err) {
            console.error(err);
            toast.error('Failed to update profile');
        }
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-base-100 shadow-lg rounded-lg mt-10">
            <Toaster />
            <h2 className="text-2xl font-bold mb-4">Profile Settings</h2>

            <div className="mb-4">
                <label className="label">Display Name</label>
                <input
                    type="text"
                    className="input input-bordered w-full"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="label">Photo URL</label>
                <input
                    type="text"
                    className="input input-bordered w-full"
                    value={photoURL}
                    onChange={(e) => setPhotoURL(e.target.value)}
                />
            </div>
            <button className="btn btn-primary w-full" onClick={handleUpdate}>
                Update Profile
            </button>
        </div>
    );
};

export default ProfileSettings;
