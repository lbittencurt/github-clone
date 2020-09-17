import React from 'react'

import {
  Container,
  Main,
  LeftSide,
  RightSide,
  Repos,
  CalendarHeading
} from './styles'

import ProfileData from '../../components/ProfileData'
import RepoCard from '../../components/RepoCard'
import RandomCalendar from '../../components/RandomCalendar'

const Profile: React.FC = () => {
  return (
    <Container>
      <Main>
        <LeftSide>
          <ProfileData
            username={'lbittencurt'}
            name={'Lucas Bittencurt'}
            avatarUrl={'https://avatars2.githubusercontent.com/u/65682607?v=4'}
            followers={887}
            following={7}
            company={'Neogrid'}
            location={'Joinville, Brazil'}
            email={'bittencurt.lucas@outlook.com'}
            blog={'www.linkedin.com/in/lucasbittencurt'}
          />
        </LeftSide>
        <RightSide>
          <Repos>
            <h2>Random repos</h2>

            <div>
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <RepoCard
                  key={n}
                  username={'lbittencurt'}
                  reponame={'youtube-content'}
                  description={'Contains all of my Youtube lessons code'}
                  language={n % 3 === 0 ? 'JavaScript' : 'TypeScript'}
                  stars={8}
                  forks={3}
                />
              ))}
            </div>
          </Repos>

          <CalendarHeading>Random calendar</CalendarHeading>

          <RandomCalendar />
        </RightSide>
      </Main>
    </Container>
  )
}

export default Profile
