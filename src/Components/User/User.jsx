"use client";
const User = ({user}) => {


    // const {name,username,email} = user


  return (
    <div className="m-10 max-w-sm">
      <div className="rounded-lg border bg-white px-4 pt-8 pb-10 shadow-lg">
        <h1 className="my-1 text-center text-xl font-bold leading-8 text-gray-900">
         {user?.name}
        </h1>
        <h3 className="font-lg text-semibold text-center leading-6 text-gray-600">
          {user?.username}
        </h3>
        <p className="text-center text-sm leading-6 text-gray-500 hover:text-gray-600">
          {user?.email}
        </p>
        <ul className="mt-3 divide-y rounded bg-gray-100 py-2 px-3 text-gray-600 shadow-sm hover:text-gray-700 hover:shadow">
          <li className="flex items-center py-3 text-sm">
            <span>Status</span>
            <span className="ml-auto">
              <span className="rounded-full bg-green-200 py-1 px-2 text-xs font-medium text-green-700">
                Open for side gigs
              </span>
            </span>
          </li>
          <li className="flex items-center py-3 text-sm">
            <span>Joined On</span>
            <span className="ml-auto">Apr 08, 2022</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default User;
