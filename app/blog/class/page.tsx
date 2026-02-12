"use client";

import Link from "next/link";

export default function ClassPage() {
  return (
    <section className="py-20 bg-white">
      <div className="container">

        {/* Page Title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl fw-bold text-gray-800 mb-3 !text-green-900">
            Latest News & Articles From <br /> The Blog
          </h2>
          <p className="max-w-[900px] mx-auto text-center text-gray-600 !text-green-700 leading-relaxed">
              Our blog shares meaningful Islamic articles that explore essential aspects of faith and daily worship,
              including the importance of prayer, the conditions of the Shahadah, and the balance between fear of Allah
              and reliance upon Him. We also provide Quran learning tips, spiritual reminders, and academy updates to
              support sincere learning, strengthen belief, and encourage consistent spiritual growth.
            </p>
        </div>

        {/* Blog Grid */}
        <div className="row g-2">

          {/* Blog Card 1 */}
          <div className="col-lg-4 col-md-3 col-sm-12">
            <div className="h-100 bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
              <img
                src="/images/resource/news-1.jpg"
                alt="Quran Learning"
                className="w-100 object-cover"
              />
              <div className="px-3 py-2">
                <h4 className="fw-bold mb-2 !text-green-900">
                  Abandoning-prayer
                </h4>
                <p className="text-gray-600 text-sm mb-4 !text-gray-700">
                Abandoning prayer is a serious spiritual loss because prayer is the believer’s strongest and most constant connection with Allah, and a source of guidance, discipline, and tranquility. When prayer is neglected, the heart gradually becomes distant from remembrance of Allah, faith weakens, and spiritual awareness slowly fades. Prayer serves as a protection from sinful behavior, renews sincerity, and repeatedly reminds a person of their purpose and accountability before Allah. It also nurtures humility, patience, gratitude, and reliance upon Allah in daily life. Leaving prayer behind is not simply neglecting a religious duty, but severing a vital lifeline that nourishes the soul, weakens spiritual strength, and harms one’s relationship with Allah
                </p>
                
              </div>
            </div>
          </div>

          {/* Blog Card 2 */}
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="h-100 bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
              <img
                src="/images/resource/news-2.jpg"
                alt="Online Quran Classes"
                className="w-100 object-cover"
              />
              <div className="px-3 py-2">
                <h4 className="fw-bold mb-2 !text-green-900">
                 Conditions-of-shahadah
                </h4>
                <p className="text-gray-600 text-sm mb-4 !text-gray-700">
                 The Shahadah in Islam is not merely a statement spoken by the tongue, but a binding covenant that defines a person’s belief, worship, and way of life. It requires sound knowledge of its meaning, firm certainty without doubt, and sincere acceptance of everything Allah has commanded. The Shahadah also demands willing submission through obedience, truthfulness where the heart fully agrees with the words spoken, and pure sincerity directed to Allah alone without seeking worldly gain or approval. Along with this, deep love for Allah and His Messenger ﷺ must be reflected in priorities, actions, and character. When these conditions are fulfilled, the Shahadah becomes a living foundation that strengthens faith, corrects behavior, guides worship, and firmly anchors the believer upon the path of Islam.
                </p>
                
              </div>
            </div>
          </div>

          {/* Blog Card 3 */}
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="h-100 bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
              <img
                src="/images/resource/news-3.jpg"
                alt="Islamic Education"
                className="w-100 object-cover"
              />
              <div className="px-3 py-2">
                <h4 className="fw-bold mb-2 !text-green-900">
                  khawf-and-tawakkul
                </h4>
                <p className="text-gray-600 text-sm mb-4 !text-gray-700">
                 In Islam, khawf (fear) and tawakkul (reliance) are essential spiritual qualities that shape a believer’s heart, behavior, and relationship with Allah. True khawf is fearing Allah with full awareness of His greatness, justice, and accountability, which encourages obedience, humility, and sincere repentance rather than despair or hopelessness. This fear keeps the believer mindful of their duties and cautious of sin, while still allowing natural human fears that do not weaken faith. Tawakkul, on the other hand, is placing complete trust in Allah after taking lawful and responsible means, believing with certainty that every outcome is under His wisdom and control. When khawf and tawakkul are balanced, fear restrains the soul from wrongdoing, and reliance brings calmness, patience, and inner strength in both ease and hardship.
                </p>
                
              </div>
            </div>
          </div>

          {/* Blog Card 4 */}
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="h-100 bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
              <img
                src="/images/resource/news-4.jpeg"
                alt="Online Quran Classes"
                className="w-100 object-cover"
              />
              <div className="px-3 py-2">
                <h4 className="fw-bold mb-2 !text-green-900">
                 Conditions-of-shahadah
                </h4>
                <p className="text-gray-600 text-sm mb-4 !text-gray-700">
                 The Shahadah in Islam is not merely a statement spoken by the tongue, but a binding covenant that defines a person’s belief, worship, and way of life. It requires sound knowledge of its meaning, firm certainty without doubt, and sincere acceptance of everything Allah has commanded. The Shahadah also demands willing submission through obedience, truthfulness where the heart fully agrees with the words spoken, and pure sincerity directed to Allah alone without seeking worldly gain or approval. Along with this, deep love for Allah and His Messenger ﷺ must be reflected in priorities, actions, and character. When these conditions are fulfilled, the Shahadah becomes a living foundation that strengthens faith, corrects behavior, guides worship, and firmly anchors the believer upon the path of Islam.
                </p>
                
              </div>
            </div>
          </div>

          {/* Blog Card 5 */}
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="h-100 bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
              <img
                src="/images/resource/news-5.jpeg"
                alt="Online Quran Classes"
                className="w-100 object-cover"
              />
              <div className="px-3 py-2">
                <h4 className="fw-bold mb-2 !text-green-900">
                 Conditions-of-shahadah
                </h4>
                <p className="text-gray-600 text-sm mb-4 !text-gray-700">
                 The Shahadah in Islam is not merely a statement spoken by the tongue, but a binding covenant that defines a person’s belief, worship, and way of life. It requires sound knowledge of its meaning, firm certainty without doubt, and sincere acceptance of everything Allah has commanded. The Shahadah also demands willing submission through obedience, truthfulness where the heart fully agrees with the words spoken, and pure sincerity directed to Allah alone without seeking worldly gain or approval. Along with this, deep love for Allah and His Messenger ﷺ must be reflected in priorities, actions, and character. When these conditions are fulfilled, the Shahadah becomes a living foundation that strengthens faith, corrects behavior, guides worship, and firmly anchors the believer upon the path of Islam.
                </p>
                
              </div>
            </div>
          </div>

          {/* Blog Card 6 */}
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="h-100 bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
              <img
                src="/images/resource/news-6.jpeg"
                alt="Online Quran Classes"
                className="w-100 object-cover"
              />
              <div className="px-3 py-2">
                <h4 className="fw-bold mb-2 !text-green-900">
                 Conditions-of-shahadah
                </h4>
                <p className="text-gray-600 text-sm mb-4 !text-gray-700">
                 The Shahadah in Islam is not merely a statement spoken by the tongue, but a binding covenant that defines a person’s belief, worship, and way of life. It requires sound knowledge of its meaning, firm certainty without doubt, and sincere acceptance of everything Allah has commanded. The Shahadah also demands willing submission through obedience, truthfulness where the heart fully agrees with the words spoken, and pure sincerity directed to Allah alone without seeking worldly gain or approval. Along with this, deep love for Allah and His Messenger ﷺ must be reflected in priorities, actions, and character. When these conditions are fulfilled, the Shahadah becomes a living foundation that strengthens faith, corrects behavior, guides worship, and firmly anchors the believer upon the path of Islam.
                </p>
                
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
