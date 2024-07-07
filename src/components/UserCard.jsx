import { FaXTwitter, FaLocationDot, FaLink  } from "react-icons/fa6";
import { HiBuildingOffice2 } from "react-icons/hi2";


function UserCard({ userInfo }) {

  return (

    <section className="flex justify-center mt-7">
      <section className={'mt-5 shadow-lg p-7 w-1/2 rounded-lg'}>
        <div className="flex" >
          <img
            alt="PFP"
            src={userInfo.avatar_url}
            className="w-25 h-28 rounded-full mr-8"
          />
          <div className="flex-auto">
            <div className="flex justify-between mb-7 w-full">
              <div>
                <span className="font-bold text-lg">{userInfo.name}</span>
                <div className="text-sm text-[#2458b9]">@{userInfo.login}</div>
              </div>
              <div className="text-xs text-zinc-600 mt-1">
                Joined {userInfo.created_at}
              </div>
            </div>
            <div className="text-zinc-600 mb-6">{userInfo.bio || 'This profile has no bio'}</div>

            <div className={'p-6 rounded-lg mb-6 shadow-md'}>
              <div className="flex justify-between text-center mx-5">
                <div>
                  <div className="text-zinc-600">Repos</div>
                  <div className="font-bold">{userInfo.public_repos}</div>
                </div>
                <div>
                  <div className="text-zinc-600">Followers</div>
                  <div className="font-bold">{userInfo.followers}</div>
                </div>
                <div>
                  <div className="text-zinc-600">Following</div>
                  <div className="font-bold">{userInfo.following}</div>
                </div>
              </div>
            </div>

            <div className="flex justify-between">
              <div className = "flex items-center text-zinc-600">
            <FaLocationDot className="mr-4"  />
              <span>{userInfo.location || 'Not Available'}</span>
              </div>
              <div className="flex items-center text-zinc-600">
                <FaXTwitter className="mr-4" />
                <span>{userInfo.twitter_username || 'Not Available'}</span>
              </div>
            </div>

            <div className="flex justify-between mt-7">
              <div className="flex items-center text-zinc-600">
              <FaLink className="mr-4"  />
                <a href={userInfo.blog} target="_blank">
                  {userInfo.blog || 'Not Available'}
                </a>
              </div>

              <div className="flex text-zinc-600">
              <HiBuildingOffice2 className="mr-4"/>
                <div>{userInfo.company || 'Not Available'}</div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default UserCard;