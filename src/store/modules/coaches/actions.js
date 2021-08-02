export default {
    async registerCoach(context, data) {
        console.table(data);
        const userId = context.rootGetters.userId;
        const coachData = {
            firstName: data.firstName,
            lastName: data.lastName,
            hourlyRate: data.hourlyRate,
            description: data.description,
            areas: data.areas,
        };

        const response = await fetch(`https://find-a-coach-vue-1befc-default-rtdb.firebaseio.com/coaches/${userId}.json`, {
            method: 'PUT',
            body: JSON.stringify(coachData)
        })

        // const responseData = await response.json();

        if (!response.ok) {
            // error
        }

        context.commit('registerCoach', { ...coachData, id: userId });
    }
};