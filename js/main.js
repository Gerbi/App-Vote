new Vue ({
    el: '#app',
    data: {
        stories: Feed.stories
    },
    computed: {
        sortedStories(){
            return this.stories.sort((a,b) => {
                return b.votes - a.votes;      
            });
        }
    },
    methods: {
        upVote(storyId){
            const index = this.stories.findIndex(story => story.id === storyId);
            this.stories[index].votes++;
        }
    }
});