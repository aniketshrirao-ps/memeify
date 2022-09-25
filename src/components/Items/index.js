import React, { useEffect, useState } from 'react';
import Realm from 'realm';
import {
  SafeAreaView,
} from 'react-native';
import MemeList from '../MemeList';
import { useDispatch, useSelector } from 'react-redux';
import { setMemes } from '../../redux/slices/memes';
let realm;

const Items = () => {
  const [loading, setLoading] = useState(false);
//   const [hasMemes, setHasMemes] = useState(false);
    const memes = useSelector((state) => state.memes);
  const dispatch = useDispatch();

  const getMemes = () => {
    // setHasMemes(false);
    setLoading(true);
    fetch('https://api.imgflip.com/get_memes')
      .then(response => response.json())
      .then(responseJson => {
        dispatch(setMemes(responseJson.data.memes));
        setLoading(false);
        // setHasMemes(true);
      })
      .catch(error => console.log(error));
  };

  realm = new Realm({
    path: 'MemesInfo.realm', // Name of our app database
    schema: [
      {
        name: 'Memes',
        properties: {
          memeId: {type: 'int', default: 0},
          id: 'string',
          url: 'string',
          details: 'string',
        },
      },
    ],
  });

  useEffect(() => {
    setTimeout(() => {
        getMemes();
    },0);
  }, []);

  const response = {
    "success": true,
    "data": {
      "memes": [
        {
          "id": "61579",
          "name": "One Does Not Simply",
          "url": "https://i.imgflip.com/1bij.jpg",
          "width": 568,
                "height": 335,
                "box_count": 2
              },
              {
                "id": "101470",
                "name": "Ancient Aliens",
                "url": "https://i.imgflip.com/26am.jpg",
                "width": 500,
                "height": 437,
                "box_count": 2
              }
              // probably a lot more memes here..
            ]
    }
  };
  
  console.log(response.data.memes);
  return (
    <SafeAreaView>
      {<MemeList dataSource={response.data.memes} loading={loading} />}
    </SafeAreaView>
  );
};

export default Items;
