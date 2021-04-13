import React, {Component} from 'react';
import {ProfileSection, ProfileParent, ProfileList,
   ProfileItem, ProfileItemSpan, Skills, SkillsDesc,
    ProgressBar, ProgressBarTitle, ProgressBarPerc, 
    ProgressBarParent, ProgressBarParentSpan,
    ProfileTitle, SkillsTitle,
    ProfileTitleSpan, SkillsTitleSpan } from './style.js';
import axios from 'axios';

class Profile extends Component {
  state = {
    profiles: []
  }
  componentDidMount() {
    axios.get('js/data.json').then(res => {
      this.setState({
        profiles: res.data.profiles
      })
    })
  }
  render(){
    const {profiles} = this.state;
    const ProfilesList = profiles.map(profile => {
      return(
        <ProgressBar key={profile.id}>
            <ProgressBarTitle>{profile.title}</ProgressBarTitle>
            <ProgressBarPerc>{profile.perc}</ProgressBarPerc>
            <ProgressBarParent>
                <ProgressBarParentSpan id={profile.id}></ProgressBarParentSpan>
            </ProgressBarParent>
        </ProgressBar>
      )
    })
    return (
      <ProfileSection>
            <div class="container">
                <ProfileParent>
                    <ProfileTitle><ProfileTitleSpan>My </ProfileTitleSpan>Profile</ProfileTitle>
                    <ProfileList>
                        <ProfileItem>
                            <ProfileItemSpan>Name</ProfileItemSpan>
                            Hamza Nabil
                        </ProfileItem>
                        <ProfileItem>
                            <ProfileItemSpan>Birthday</ProfileItemSpan>
                            21/1/1996
                        </ProfileItem>
                        <ProfileItem>
                            <ProfileItemSpan>Address</ProfileItemSpan>
                            Ain shams
                        </ProfileItem>
                        <ProfileItem>
                            <ProfileItemSpan>Phone</ProfileItemSpan>
                            4444 5555 6666
                        </ProfileItem>
                        <ProfileItem>
                            <ProfileItemSpan>Email</ProfileItemSpan>
                            hamza@hamza.com
                        </ProfileItem>
                        <ProfileItem>
                            <ProfileItemSpan>Website</ProfileItemSpan>
                            <ProfileItemSpan web>www.google.com</ProfileItemSpan>
                        </ProfileItem>
                    </ProfileList>
                </ProfileParent>
                
                <Skills>
                    <SkillsTitle>Some <SkillsTitleSpan>skills</SkillsTitleSpan></SkillsTitle>
                    <SkillsDesc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </SkillsDesc>
                    {ProfilesList}
                    
                </Skills>
                
            </div>
        </ProfileSection>
    );
  }
    
  }
  


export default Profile;
