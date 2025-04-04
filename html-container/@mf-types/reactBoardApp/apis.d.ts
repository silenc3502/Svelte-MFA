
    export type RemoteKeys = 'reactBoardApp/App';
    type PackageType<T> = T extends 'reactBoardApp/App' ? typeof import('reactBoardApp/App') :any;