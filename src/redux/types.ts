import {sendMessageCreator, updateNewMessageBodyCreator} from './reducers/messagesReducer';
import {addPostActionCreator, updateNewPostTextActionCreator} from './reducers/profileReducer';
import {followAC, setUsersAC, unfollowAC} from './reducers/usersReducer';


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
  usersData: UsersDataType[]
}

export type UsersDataType = {
  id: number
  followed: boolean
  fullName: string
  status: string
  location: LocationType
}
export type LocationType = {
  city: string
  country: string
}


//-----------------Creators----------------------------------------------------------


export type sendMessageCreatorType = ReturnType<typeof sendMessageCreator>
export type updateNewPostTextActionCreatorType = ReturnType<typeof updateNewPostTextActionCreator>
export type updateNewMessageBodyCreatorType = ReturnType<typeof updateNewMessageBodyCreator>
export type addPostActionCreatorType = ReturnType<typeof addPostActionCreator>

export type followACType = ReturnType<typeof followAC>
export type unfollowACType = ReturnType<typeof unfollowAC>
export type setUsersACType = ReturnType<typeof setUsersAC>

export type AllActions = updateNewMessageBodyCreatorType
    | sendMessageCreatorType
    | updateNewPostTextActionCreatorType
    | addPostActionCreatorType

    | followACType
    | unfollowACType
    | setUsersACType
