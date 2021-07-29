import { Resource } from '@ngxp/resource'
import { UserProfile } from '../domain/user-profile'

export async function loadUserProfile(): Promise<Resource<UserProfile>> {
    return fetch('https://webapp-demos-api.azurewebsites.net/userProfile')
        .then(r => r.json())
}
