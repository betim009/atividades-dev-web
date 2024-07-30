import yt_dlp

musicas = [
    "https://www.youtube.com/watch?v=mEUANpcLfCc",
    "https://www.youtube.com/watch?v=TxipVM_0CBA",
    "https://www.youtube.com/watch?v=V861a_4Ex3E",
    "https://www.youtube.com/watch?v=UguyZtTAclQ",
    "https://www.youtube.com/watch?v=3JiMr-HgHJ8",
    "https://www.youtube.com/watch?v=kZa9pRymolU",
]

for index, musica in enumerate(musicas):
    ydl_opts = {
        "format": "bestaudio/best",
        "outtmpl": f"musica{index}.mp3",
        "postprocessors": [
            {
                "key": "FFmpegExtractAudio",
                "preferredcodec": "mp3",
                "preferredquality": "192",
            }
        ],
    }
    try:
        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            ydl.download([musica])  # Passa a URL dentro de uma lista
        print(f"Download de musica{index}.mp3 concluído!")
    except Exception as e:
        print(f"Erro ao baixar {musica}: {e}")

print("Download concluído!")
