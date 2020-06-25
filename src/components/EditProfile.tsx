import React from 'react';

class EditProfile extends React.Component {
    render(): JSX.Element {
        return (
            <div>
                <input type="file" />
                <img src="../assets/images/kai.png" alt="profile-photo" />

                <label>Name
                    <input type="text" />
                </label>

                <label>Age
                    <input type="number" />
                </label>

                <label>Gender
                    <input type="radio" name="gender" value="woman" />
                    <input type="radio" name="gender" value="man" />
                </label>

                <label>Height
                    <input type="number" />
                </label>

                <label>Weight
                    <input type="number" />
                </label>

                <label>Favorites
                    <input type="text" />
                </label>

                <label>Hate
                    <input type="text" />
                </label>

                <label>Hobby
                    <input type="text" />
                </label>

                <label>Personality
                    <textarea></textarea>
                </label>
                
                <input type="checkbox" />

                <button>Save</button>
            </div>
        );
    }
}

export default EditProfile;
