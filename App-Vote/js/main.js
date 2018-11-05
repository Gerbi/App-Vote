const StoryComponent = {
    template: `
    <div class="card">
        <img class="card-img-top" :src="story.storyImage" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title"><a :href="story.url"></a>{{story.title}}</h5>
            <p class="card-text">{{story.text}}</p>
            <p class="card-text"><small class="text-muted">{{story.postedAt}}</small></p>
            <button class="btn btn-primary" @click="upVote(story.id)">UpVote</button>
            <span class="badge float-right" 
            :class = "[story.votes >=10 ? 'badge-success': 'badge-secondary']">{{story.votes}}</span>
        </div>   
    </div>
    `,
    props: ['story', 'stories'],
    methods: {
        upVote(storyId){
            const index = this.stories.findIndex(story => story.id === storyId);
            this.stories[index].votes++;
        }
    }
    
};
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
    
    components: {
        'story-component': StoryComponent
    }
});