import { UserProfile } from '../domain/user-profile'
import { Resource } from '@ngxp/resource'

export async function loadUserProfile(): Promise<Resource<UserProfile>> {
    return fetch('https://example.hypercontract.org/userProfile')
        .then(r => r.json())
}
