"use client";

import Image from "next/image";
import {
  User,
  Settings,
  Smartphone,
  CreditCard,
  ChevronRight,
  Plus,
  Phone,
} from "lucide-react";

const profiles = [
  {
    id: 1,
    name: "Profile Name",
    current: true,
  },
  {
    id: 2,
    name: "Profile Name",
    current: false,
  },
];

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-semibold mb-8">Account</h2>

        <div className="grid lg:grid-cols-[260px_1fr] gap-8">
          {/* Sidebar */}

          <div className="bg-[#151515] border border-[#2A2A2A] rounded-xl p-4 h-fit">
            <ul className="space-y-2">
              <li className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-[#202020] cursor-pointer">
                <CreditCard size={18} />
                Membership
              </li>

              <li className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-[#202020] cursor-pointer">
                <Smartphone size={18} />
                Devices
              </li>

              <li className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-[#202020] cursor-pointer">
                <Settings size={18} />
                Settings
              </li>

              <li className="flex items-center gap-3 px-4 py-3 rounded-lg bg-[#1E1E1E] text-white">
                <User size={18} />
                Profile
              </li>
            </ul>
          </div>

          {/* Right */}

          <div className="space-y-6">
            {/* Phone */}

            <div className="bg-[#151515] border border-[#2A2A2A] rounded-xl p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-[#242424] flex items-center justify-center">
                <Phone size={20} />
              </div>

              <div>
                <p className="text-sm text-gray-400">Logged with</p>
                <h3 className="text-2xl font-semibold">
                  8699780274
                </h3>
              </div>
            </div>

            {/* Profiles */}

            <div className="bg-[#151515] border border-[#2A2A2A] rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">
                  Manage Profiles
                </h3>

                <button className="bg-red-600 hover:bg-red-700 transition px-5 py-2 rounded-lg flex items-center gap-2 text-sm font-medium">
                  <Plus size={16} />
                  Add New Profile
                </button>
              </div>

              <div className="space-y-4">
                {profiles.map((profile) => (
                  <div
                    key={profile.id}
                    className="border border-[#2A2A2A] rounded-xl px-5 py-4 flex items-center justify-between hover:border-red-500 transition"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-red-900 rounded-lg flex items-center justify-center">
                        <Image
                          src="/image/profile.png"
                          alt="profile"
                          width={28}
                          height={28}
                        />
                      </div>

                      <span className="font-medium">
                        {profile.name}
                      </span>
                    </div>

                    <div className="flex items-center gap-4">
                      {profile.current && (
                        <span className="bg-[#303030] px-4 py-2 rounded-lg text-sm text-gray-300">
                          Your profile
                        </span>
                      )}

                      <ChevronRight className="text-gray-400" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}