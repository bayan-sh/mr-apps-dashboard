export const baseURL = 'https://it.mr-appss.com/api/';
export const imageURL = 'https://it.mr-appss.com/';

export const loginAPI = `${baseURL}auth/login`
export const logoutAPI = `${baseURL}auth/logout`

//Services
export const CreateServiceAPI = `${baseURL}services/add`
export const UpdateServiceAPI = `${baseURL}services/update/`
export const DeleteServiceAPI = `${baseURL}services/delete/`
export const GetServicesAPI = `${baseURL}services/get?page=`

//Projects
export const CreateProjectAPI = `${baseURL}projects/add`
export const UpdateProjectAPI = `${baseURL}projects/update/`
export const DeleteProjectAPI = `${baseURL}projects/delete/`
export const GetProjectsAPI = `${baseURL}projects/get?page=`

//Contact
export const GetContactsAPI = `${baseURL}contacts/get?page=`
export const PostContactsAPI = `${baseURL}contacts/add`
//About Us
export const GetAboutUsAPI = `${baseURL}aboutUs/get`
export const UpdateAboutUsAPI = `${baseURL}aboutUs/update`