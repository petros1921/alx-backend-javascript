import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const signUpPromise = signUpUser(firstName, lastName);
  const uploadPhotoPromise = uploadPhoto(fileName);

  const results = await Promise.allSettled([signUpPromise, uploadPhotoPromise]);

  return results.map((result) => {
    if (result.status === 'fulfilled') {
      return { status: 'fulfilled', value: result.value };
    } else {
      return { status: 'rejected', value: result.reason.toString() };
    }
  });
}
