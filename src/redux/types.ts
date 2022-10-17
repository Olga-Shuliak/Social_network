import {sendMessageCreator, updateNewMessageBodyCreator} from './reducers/messagesReducer';
import {addPostActionCreator, updateNewPostTextActionCreator} from './reducers/profileReducer';
import {
  followAC,
  setCurrentPageAC,
  setIsFetchingAC,
  setTotalUsersCountAC,
  setUsersAC,
  unfollowAC
} from './reducers/usersReducer';


export type AppStoreType = {
  _state: AppStateType
  _callSubscriber: (state: AppStateType) => void
  getState: () => AppStateType
  subscribe: (observer: (state: AppStateType) => void) => void
  dispatch: (action: AllActions) => void
}

export type AppStateType = {
  profilePage: ProfilePageType
  messagesPage: MessagePageType
  usersPage: UsersPageType
}
//-----------------------------------------------
export type ProfilePageType = {
  postsData: PostType[]
  newPostText: string
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
export type updateNewPostTextActionCreatorType = ReturnType<typeof updateNewPostTextActionCreator>
export type updateNewMessageBodyCreatorType = ReturnType<typeof updateNewMessageBodyCreator>
export type addPostActionCreatorType = ReturnType<typeof addPostActionCreator>

export type followACType = ReturnType<typeof followAC>
export type unfollowACType = ReturnType<typeof unfollowAC>
export type setUsersACType = ReturnType<typeof setUsersAC>
export type setCurrentPageACType = ReturnType<typeof setCurrentPageAC>
export type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCountAC>
export type setIsFetchingACType = ReturnType<typeof setIsFetchingAC>

export type AllActions = updateNewMessageBodyCreatorType
    | sendMessageCreatorType
    | updateNewPostTextActionCreatorType
    | addPostActionCreatorType

    | followACType
    | unfollowACType
    | setUsersACType
    | setCurrentPageACType
    | setTotalUsersCountACType
    | setIsFetchingACType
