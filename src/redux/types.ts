import {sendMessageCreator, updateNewMessageBodyCreator} from './reducers/messagesReducer';
import {
  addPost, setUserProfile,
  updateNewPostText
} from './reducers/profileReducer';
import {
  follow,
  setCurrentPage,
  setIsFetching,
  setTotalUsersCount,
  setUsers,
  unfollow
} from './reducers/usersReducer';


// export type AppStoreType = {
//   _state: AppStateType
//   _callSubscriber: (state: AppStateType) => void
//   getState: () => AppStateType
//   subscribe: (observer: (state: AppStateType) => void) => void
//   dispatch: (action: AllActions) => void
// }

export type AppStateType = {
  profilePage: ProfilePageType
  messagesPage: MessagePageType
  usersPage: UsersPageType
}
//-----------------------------------------------
export type ProfilePageType = {
  postsData: PostType[]
  newPostText: string
  profile: {} | null
}

export type ProfileType = {
  id: number
  message: string
  likeCount: number

}
//  ________________________!!!!!_______________
export type ProfileApiType ={
  aboutMe: string
  contacts: ContactsType
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  userId: number
  photos: PhotosType
}

export type ContactsType = {
  facebook: string
  website: string
  vk: string
  twitter: string
  instagram: string
  youtube: string
  github: string
  mainLink: string
}


export type PostType = {
  id: number
  message: string
  likeCount: number
}
//----------------------------------------------
export type MessagePageType = {
  dialogsData: DialogsType[]
  messagesData: MessageType[]
  newMessageBody: string
}

export type MessageType = {
  id: number
  message: string
}

export type DialogsType = {
  id: number
  name: string
}
//--------------------------------------
export type UsersPageType = {
  users: UserType[]
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isFetching: boolean
}

export type UserType = {
  id: number
  name: string
  uniquerUrlName: string
  photos: PhotosType
  followed: boolean
  status: string
  // location: LocationType
}
export type PhotosType = {
  small: string
  large: string
}
// export type LocationType = {
//   city: string
//   country: string
// }


//-----------------Creators----------------------------------------------------------


export type sendMessageCreatorType = ReturnType<typeof sendMessageCreator>
export type updateNewPostTextActionCreatorType = ReturnType<typeof updateNewPostText>
export type updateNewMessageBodyCreatorType = ReturnType<typeof updateNewMessageBodyCreator>
export type addPostActionCreatorType = ReturnType<typeof addPost>
export type setUserProfileACType = ReturnType<typeof setUserProfile>

export type followACType = ReturnType<typeof follow>
export type unfollowACType = ReturnType<typeof unfollow>
export type setUsersACType = ReturnType<typeof setUsers>
export type setCurrentPageACType = ReturnType<typeof setCurrentPage>
export type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCount>
export type setIsFetchingACType = ReturnType<typeof setIsFetching>

export type AllActions = updateNewMessageBodyCreatorType
    | sendMessageCreatorType
    | updateNewPostTextActionCreatorType
    | addPostActionCreatorType
    | setUserProfileACType

    | followACType
    | unfollowACType
    | setUsersACType
    | setCurrentPageACType
    | setTotalUsersCountACType
    | setIsFetchingACType
