
    export type RemoteKeys = 'javascriptTestApp/App';
    type PackageType<T> = T extends 'javascriptTestApp/App' ? typeof import('javascriptTestApp/App') :any;