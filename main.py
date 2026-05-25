from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from youtube_transcript_api import YouTubeTranscriptApi
import requests

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

FRAUD_PHRASES = [
    'telegram',
    'whatsapp',
    'vip group',
    'guaranteed returns',
    '100% profit',
    'no loss',
    'signal group',
    'join telegram',
    'dm me',
    'contact me'
]

BRANDS = [
    'zerodha',
    'groww',
    'upstox',
    'angel one',
    'icici direct'
]

def detect_phrases(text):

    found = []

    lower = text.lower()

    for phrase in FRAUD_PHRASES:

        if phrase in lower:
            found.append(phrase)

    return found

def detect_risk(phrases):

    critical = [
        'telegram',
        'whatsapp',
        'guaranteed returns',
        '100% profit'
    ]

    for c in critical:

        if c in phrases:
            return 'Critical'

    if len(phrases) > 0:
        return 'Medium'

    return 'Low'

@app.get('/scan')
def scan(api_key: str, keyword: str):

    search_url = (
        'https://www.googleapis.com/youtube/v3/search'
        f'?part=snippet&q={keyword}'
        f'&type=video&maxResults=5'
        f'&order=date&key={api_key}'
    )

    response = requests.get(search_url)

    data = response.json()

    results = []

    if 'items' not in data:

        return {
            'error': data
        }

    for item in data['items']:

        video_id = item['id']['videoId']

        title = item['snippet']['title']

        description = item['snippet'].get(
            'description',
            ''
        )

        transcript_text = ''

        try:

            transcript = (
                YouTubeTranscriptApi
                .get_transcript(video_id)
            )

            transcript_text = ' '.join(
                [x['text'] for x in transcript]
            )

        except:

            transcript_text = ''

        combined_text = (
            title + ' ' +
            description + ' ' +
            transcript_text
        )

        phrases = detect_phrases(
            combined_text
        )

        risk = detect_risk(
            phrases
        )

        matched_brands = []

        for brand in BRANDS:

            if brand in combined_text.lower():

                matched_brands.append(
                    brand
                )

        results.append({

            'title': title,

            'channel':
            item['snippet']['channelTitle'],

            'brands': matched_brands,

            'risk': risk,

            'phrases': phrases,

            'transcript_found':
            len(transcript_text) > 0,

            'url':
            f'https://youtube.com/watch?v={video_id}'

        })

    return {
        'results': results
    }
