import {AllActions} from './state';

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
}

export type ProfilePageType = {
  postsData: PostType[]
  newPostText: string
}

export type PostType = {
  id: number
  message: string
  likeCount: number
}

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
