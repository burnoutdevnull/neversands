document.getElementById('resources').innerHTML = `
<svg id="farmer-front" viewBox="0 0 64 64" x="0">
        <!-- Hat with details -->
        <path d="M24 16h16v2h-16z" fill="#8B4513"/>
        <path d="M22 18h20v4h-20z" fill="#8B4513"/>
        <path d="M21 18h22v1h-22z" fill="#A0522D"/> <!-- Hat shine -->
        <path d="M20 21h24v2h-24z" fill="#6B4423"/> <!-- Hat brim -->

        <!-- Head with shading -->
        <path d="M24 23h16v12h-16z" fill="#FFA07A"/>
        <path d="M24 23h16v2h-16z" fill="#FFB894"/> <!-- Forehead highlight -->
        <path d="M24 33h16v2h-16z" fill="#E08E69"/> <!-- Chin shadow -->

        <!-- Detailed face -->
        <path d="M28 27h4v3h-4z" fill="#1C1C1C"/> <!-- Left eye -->
        <path d="M28 27h4v1h-4z" fill="#4A4A4A"/> <!-- Eye highlight -->
        <path d="M36 27h4v3h-4z" fill="#1C1C1C"/> <!-- Right eye -->
        <path d="M36 27h4v1h-4z" fill="#4A4A4A"/> <!-- Eye highlight -->
        <path d="M30 32c4 2 8 2 8 0" fill="none" stroke="#E08E69" stroke-width="1"/> <!-- Smile -->

        <!-- Detailed overalls -->
        <path d="M20 35h24v16h-24z" fill="#4169E1"/> <!-- Base -->
        <path d="M20 35h24v2h-24z" fill="#5179F1"/> <!-- Top highlight -->
        <path d="M20 49h24v2h-24z" fill="#3159D1"/> <!-- Bottom shadow -->

        <!-- Overall straps with metallic buttons -->
        <path d="M24 35h4v16h-4z" fill="#00008B"/>
        <path d="M24 35h4v1h-4z" fill="#1C1C1C"/> <!-- Strap shadow -->
        <circle cx="26" cy="37" r="1.5" fill="#DAA520"/> <!-- Button -->
        <circle cx="26" cy="37" r="1" fill="#FFC125"/> <!-- Button highlight -->

        <path d="M36 35h4v16h-4z" fill="#00008B"/>
        <path d="M36 35h4v1h-4z" fill="#1C1C1C"/> <!-- Strap shadow -->
        <circle cx="38" cy="37" r="1.5" fill="#DAA520"/> <!-- Button -->
        <circle cx="38" cy="37" r="1" fill="#FFC125"/> <!-- Button highlight -->

        <!-- Detailed arms -->
        <path d="M16 35h4v12h-4z" fill="#FFA07A"/> <!-- Left arm -->
        <path d="M16 35h4v2h-4z" fill="#FFB894"/> <!-- Arm highlight -->
        <path d="M16 45h4v2h-4z" fill="#E08E69"/> <!-- Arm shadow -->

        <path d="M44 35h4v12h-4z" fill="#FFA07A"/> <!-- Right arm -->
        <path d="M44 35h4v2h-4z" fill="#FFB894"/> <!-- Arm highlight -->
        <path d="M44 45h4v2h-4z" fill="#E08E69"/> <!-- Arm shadow -->

        <!-- Detailed legs -->
        <path d="M24 51h6v10h-6z" fill="#00008B"/> <!-- Left leg -->
        <path d="M24 51h6v2h-6z" fill="#1C1C1C"/> <!-- Leg shadow -->
        <path d="M34 51h6v10h-6z" fill="#00008B"/> <!-- Right leg -->
        <path d="M34 51h6v2h-6z" fill="#1C1C1C"/> <!-- Leg shadow -->
    </svg>


`