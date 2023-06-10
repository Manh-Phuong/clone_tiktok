import * as request from '~/utils/httpRequest'

export const search = async (type = 'for-you', page = 1 ) => {
    try {
        const res = await request.get('videos', {
            params: {
                type,
                page
            }
        })
        return res.data
        
    } catch (error) {
        console.log(error)
    }
}